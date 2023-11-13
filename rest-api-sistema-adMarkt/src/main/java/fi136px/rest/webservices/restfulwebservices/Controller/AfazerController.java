package fi136px.rest.webservices.restfulwebservices.Controller;

import fi136px.rest.webservices.restfulwebservices.Service.AfazerService;
import fi136px.rest.webservices.restfulwebservices.Class.Afazer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AfazerController {

    @Autowired
    private AfazerService afazerService;

    @GetMapping("/users/{username}/afazeres")
    public List<Afazer> retrieveAfazeres(@PathVariable String username) {
        return afazerService.findByUsername(username);
    }

}
