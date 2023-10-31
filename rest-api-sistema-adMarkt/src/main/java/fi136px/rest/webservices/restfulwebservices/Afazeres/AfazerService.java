package fi136px.rest.webservices.restfulwebservices.Afazeres;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import org.springframework.stereotype.Service;

@Service
public class AfazerService {
	
	private static List<Afazer> afazeres = new ArrayList<>();
	
	private static int afazeresCount = 0;
	
	static {
		afazeres.add(new Afazer(++afazeresCount, "in28minutes","Get AWS Certified",
							LocalDate.now().plusYears(10), false ));
		afazeres.add(new Afazer(++afazeresCount, "in28minutes","Learn DevOps",
				LocalDate.now().plusYears(11), false ));
		afazeres.add(new Afazer(++afazeresCount, "in28minutes","Learn Full Stack Development",
				LocalDate.now().plusYears(12), false ));
	}
	
	public List<Afazer> findByUsername(String username){
		Predicate<? super Afazer> predicate =
				todo -> todo.getUsername().equalsIgnoreCase(username);
		return afazeres.stream().filter(predicate).toList();
	}
	
	public Afazer addTodo(String username, String description, LocalDate targetDate, boolean done) {
		Afazer todo = new Afazer(++afazeresCount,username,description,targetDate,done);
		afazeres.add(todo);
		return todo;
	}
	
	public void deleteById(int id) {
		Predicate<? super Afazer> predicate = todo -> todo.getId() == id;
		afazeres.removeIf(predicate);
	}

	public Afazer findById(int id) {
		Predicate<? super Afazer> predicate = todo -> todo.getId() == id;
		Afazer todo = afazeres.stream().filter(predicate).findFirst().get();
		return todo;
	}

	public void updateTodo(Afazer todo) {
		deleteById(todo.getId());
		afazeres.add(todo);
	}
}