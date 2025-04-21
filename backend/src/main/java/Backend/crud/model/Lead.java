package Backend.crud.model;

import lombok.*;

import jakarta.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "leads")
public class Lead {

    @Id
    @NonNull
    @Column(name = "lead_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long lead_id;

    @Column(name = "email")
    @NonNull
    private String email;

    @Column(name = "message")
    @NonNull
    private String message;

    @Column(name = "name")
    @NonNull
    private String name;

}

