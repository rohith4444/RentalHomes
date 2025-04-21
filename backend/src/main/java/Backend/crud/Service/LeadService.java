package Backend.crud.Service;

import Backend.crud.DAO.LeadDAO;
import Backend.crud.exception.ResourceNotFoundException;
import Backend.crud.model.Lead;
import Backend.crud.repository.LeadRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service

public class LeadService {

    @Autowired
    LeadRepository leadRepository;
    @Autowired
    ModelMapper modelMapper;

    public LeadDAO CreateCustomerLead(LeadDAO lead) {
        Lead leadvar = modelMapper.map(lead, Lead.class);
        LeadDAO  leadDAO = modelMapper.map(leadRepository.save(leadvar), LeadDAO.class);
        return leadDAO;
    }
    public List<LeadDAO> getAllLeads() {
        List<LeadDAO> users = new ArrayList<LeadDAO>();
        List<Lead> leads = leadRepository.findAll();
        leads.stream().forEach(c -> {
            LeadDAO leadDAO = modelMapper.map(c, LeadDAO.class);
            users.add(leadDAO);
        });
        return users;
    }
}
