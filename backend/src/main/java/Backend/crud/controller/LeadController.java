package Backend.crud.controller;

import Backend.crud.DAO.LeadDAO;
import Backend.crud.Service.LeadService;
import Backend.crud.exception.ResourceNotFoundException;
import Backend.crud.model.Lead;
import Backend.crud.repository.LeadRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("api/v1/leads")

public class LeadController {

    @Autowired
    private LeadService leadService;

    @GetMapping
    public ResponseEntity<List<LeadDAO>> getAllLeads(){
        return ResponseEntity.ok(leadService.getAllLeads());
    }

    //build create customer api
    @PostMapping
    public ResponseEntity<LeadDAO> createCustomerLead(@Valid @RequestBody LeadDAO lead) {
        return ResponseEntity.ok(leadService.CreateCustomerLead(lead));
    }

}
