package Backend.crud.Service;


import Backend.crud.DAO.FeedbackDAO;
import Backend.crud.exception.ResourceNotFoundException;
import Backend.crud.model.Feedback;
import Backend.crud.repository.FeedbackRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class FeedbackService {

    @Autowired
    FeedbackRepository feedbackRepository;
    @Autowired
    ModelMapper modelMapper;

    public FeedbackDAO CreateCustomerFeedback(FeedbackDAO feedback) {
        Feedback feed = modelMapper.map(feedback, Feedback.class);
        FeedbackDAO  feedbackDAO = modelMapper.map(feedbackRepository.save(feed), FeedbackDAO.class);
        return feedbackDAO;
    }
    public List<FeedbackDAO> getAllFeedbacks() {
        List<FeedbackDAO> users = new ArrayList<FeedbackDAO>();
        List<Feedback> feedbacks = feedbackRepository.findAll();
        feedbacks.stream().forEach(c -> {
            FeedbackDAO feedbackDAO = modelMapper.map(c, FeedbackDAO.class);
            users.add(feedbackDAO);
        });
        return users;
    }

}
