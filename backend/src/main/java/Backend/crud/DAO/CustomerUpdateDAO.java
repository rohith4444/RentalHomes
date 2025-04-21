package Backend.crud.DAO;

import Backend.crud.Enum.IndianState;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class CustomerUpdateDAO {

    private long id;

    private String firstName;

    private String lastName;

    @Email
    private String email;

    private long mobilenumber;

    @Size(min=5, message="The address line one should be at least of length 5")
    private String address1;

    @Size(min=5, message="The address line one should be at least of length 5")
    private String address2;

    @NotNull
    private String district;

    @NotNull
    private IndianState state;

    @NotNull
    private int pincode;

    @NotNull
    private String country;

}
