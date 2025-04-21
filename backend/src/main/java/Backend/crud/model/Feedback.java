package Backend.crud.model;

import lombok.*;

import jakarta.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "feedback")
public class Feedback {

    @Id
    @NonNull
    @Column(name = "feedback_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long feedback_id;

    @Column(name = "email")
    @NonNull
    private String email;

    @Column(name = "message")
    @NonNull
    private String message;

    @Column(name = "rating")
    @NonNull
    private String rating;

}
