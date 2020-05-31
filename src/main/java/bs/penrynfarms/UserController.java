package bs.penrynfarms;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    private final UserRepository userRepository;

    @GetMapping("/users")
    public List<User> getUsers(){
        return (List<User>) userRepository.findAll();
    }

    @PostMapping("/users")
    void addUser(@RequestBody User user){
        userRepository.save(user);
    }



    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


}
