package Backend.crud.model;

import lombok.*;
import Backend.crud.Enum.IndianState;
import jakarta.persistence.*;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "House")
public class House {

    @Id
    @NonNull
    @Column(name = "property_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long property_id;

    @NonNull
    @Column(name = "type")
    private String type;

    @NonNull
    @Column(name = "bedrooms")
    private long bedroom;

    @Column(name = "emunities")
    private String Emunities;

    @NonNull
    @Column(name = "description")
    private String description;

    @NonNull
    @Column(name = "address_line")
    private String address;

    @Column(name = "address_line2")
    private String address2;

    @NonNull
    @Column(name = "district")
    private String district;

    @NonNull
    @Column(name = "state")
    private IndianState state;

    @NonNull
    @Column(name = "country")
    private String country;

    @NonNull
    @Column(name = "pinCode")
    private long pincode;

    @NonNull
    @Column(name = "amount")
    private long amount;

    @NonNull
    @Column(name = "images")
    private String images;

    @NonNull
    @Column(name = "videos")
    private String videos;

    @ManyToOne
    private Customer owner;

    @ManyToMany(mappedBy = "favorite", fetch = FetchType.LAZY)
    private Set<Customer> favorites;
}