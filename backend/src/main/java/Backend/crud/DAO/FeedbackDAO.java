package Backend.crud.DAO;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter

public class FeedbackDAO {

    @NotNull
    @Size(min=5)
    private String message;
    @NotNull
    private String rating;
    @NotNull
    @Email
    private String email;

}
