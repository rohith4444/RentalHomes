package Backend.crud.controller;

import Backend.crud.DAO.FeedbackDAO;
import Backend.crud.Service.FeedbackService;
import Backend.crud.exception.ResourceNotFoundException;
import Backend.crud.model.Feedback;
import Backend.crud.repository.FeedbackRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("api/v1/feedbacks")

public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @GetMapping
    public ResponseEntity<List<FeedbackDAO>> getAllFeedbacks(){
        return ResponseEntity.ok(feedbackService.getAllFeedbacks());
    }

    //build create customer api
    @PostMapping
    public ResponseEntity<FeedbackDAO> createCustomerFeedback(@Valid @RequestBody FeedbackDAO feedback) {
        return ResponseEntity.ok(feedbackService.CreateCustomerFeedback(feedback));
    }

}
