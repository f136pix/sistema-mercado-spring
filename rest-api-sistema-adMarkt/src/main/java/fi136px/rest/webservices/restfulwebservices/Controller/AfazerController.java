package fi136px.rest.webservices.restfulwebservices.Controller;

import fi136px.rest.webservices.restfulwebservices.Service.AfazerService;
import fi136px.rest.webservices.restfulwebservices.Class.Afazer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AfazerController {

    @Autowired
    private AfazerService afazerService;

    @GetMapping("/users/{username}/afazeres")
    public List<Afazer> retrieveAfazeres(@PathVariable String username) {
        return afazerService.findByUsername(username);
    }

    @GetMapping("/users/{username}/afazeres/{id}")
    public Afazer retrieveById(@PathVariable String username, @PathVariable int id) {
        return afazerService.findById(id);
    }

    @DeleteMapping("/users/{username}/afazeres/{id}")
    public ResponseEntity<String> deleteById(@PathVariable String username, @PathVariable int id) {
        try {
            afazerService.deleteById(id);
            return ResponseEntity.noContent().build();
        } catch (Exception err) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/users/{username}/afazeres/{id}")
    public ResponseEntity<String> updateById(@PathVariable String username, @PathVariable int id, @RequestBody Afazer afazer) {
        try {
            afazerService.updateTodo(afazer);
            return ResponseEntity.ok("Afazer atualizado : " + afazer);
        } catch (Exception err ) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/users/{username}/afazeres")
    public ResponseEntity<String> ceateAfazer(@PathVariable String username, @RequestBody Afazer afazer) {
        try {
            afazer.setUsername(username);
            afazer.setDone(false);
            Afazer afazerCriado = afazerService.addAfazer(afazer);
            return ResponseEntity.ok("Afazer criado : " + afazerCriado);
        } catch (Exception err) {
            return ResponseEntity.badRequest().build();
        }
    }

}
