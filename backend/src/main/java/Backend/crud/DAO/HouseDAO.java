package Backend.crud.DAO;

import Backend.crud.Enum.IndianState;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter

public class HouseDAO {

    private long property_id;

    private long customer_id;

    @NotNull
    private String type;

    @NotNull
    private long bedroom;

    private String Emunities;

    @NotNull
    @Size(min = 5, message = "The username should be of minimum 5 characters")
    private String description;

    @NotNull
    @Size(min = 5, message = "The username should be of minimum 5 characters")
    private String address;

    private String address2;

    @NotNull
    private String district;

    @NotNull
    private IndianState state;

    @NotNull
    private String country;

    @NotNull
    @Size(min = 6, message = "The username should be of minimum 6 characters")
    private long pincode;

    @NotNull
    private long amount;

    @NotNull
    private String images;

    @NotNull
    private String videos;
}
