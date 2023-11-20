package fi136px.rest.webservices.restfulwebservices.Service;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import fi136px.rest.webservices.restfulwebservices.Class.Afazer;
import org.springframework.stereotype.Service;

@Service
public class AfazerService {

	private static List<Afazer> afazeres = new ArrayList<>();
	
	private static int afazeresCount = 0;
	
	static {
		afazeres.add(new Afazer(++afazeresCount, "Filipe","Get AWS Certified",
							LocalDate.now().plusYears(10), false ));
		afazeres.add(new Afazer(++afazeresCount, "Filipe","Learn DevOps",
				LocalDate.now().plusYears(11), false ));
		afazeres.add(new Afazer(++afazeresCount, "FIlipe","Learn Full Stack Development",
				LocalDate.now().plusYears(12), false ));
	}
	
	public List<Afazer> findByUsername(String username){
		Predicate<? super Afazer> predicate =
				afazer -> afazer.getUsername().equalsIgnoreCase(username);
		return afazeres.stream().filter(predicate).toList();
	}
	
	public Afazer addAfazer(Afazer afazer) {
		Afazer todo = new Afazer(++afazeresCount,afazer.getUsername(),afazer.getDescription(),afazer.getTargetDate(),afazer.isDone());
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