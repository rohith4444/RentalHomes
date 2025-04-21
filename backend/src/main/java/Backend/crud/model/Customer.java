package Backend.crud.model;

import Backend.crud.Enum.IndianState;
import lombok.*;

import jakarta.persistence.*;

import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "customer")
public class Customer {

    @Id
    @Column(name = "customer_id")
    @NonNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "first_name")
    @NonNull
    private String firstName;

    @Column(name = "last_name")
    @NonNull
    private String lastName;

    @Column(name = "email", unique = true)
    @NonNull
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "mobile_number")
    private long mobilenumber;

    @Column(name = "address_line1")
    private String address1;

    @Column(name = "address_line2")
    private String address2;

    @Column(name = "district")
    private String district;

    @Column(name = "state")
    private IndianState state;

    @Column(name = "country")
    private String country;

    @Column(name = "pinCode")
    private int pincode;

    @OneToMany(mappedBy = "owner")
    private List<House> houses;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name="favorites", joinColumns = {
            @JoinColumn(name="customer_id", referencedColumnName = "customer_id")
        },
            inverseJoinColumns = {
            @JoinColumn(name="property_id", referencedColumnName = "property_id")
        }
    )
    private Set<House> favorite;
}