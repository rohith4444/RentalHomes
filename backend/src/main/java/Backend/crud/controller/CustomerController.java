package Backend.crud.controller;

import Backend.crud.DAO.CustomerDAO;
import Backend.crud.DAO.CustomerUpdateDAO;
import Backend.crud.Service.CustomerService;
import Backend.crud.exception.ResourceNotFoundException;
import Backend.crud.model.Customer;
import Backend.crud.repository.CustomerRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("api/v1/customers")

public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping
    public ResponseEntity<List<CustomerUpdateDAO>> getAllCustomers(){
        return ResponseEntity.ok(customerService.getAllUsers());
    }

    //build create customer api
    @PostMapping
    public ResponseEntity<CustomerUpdateDAO> createCustomer(@Valid @RequestBody CustomerDAO customer) {
        return ResponseEntity.ok(customerService.CreateCustomerService(customer));
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<CustomerUpdateDAO> getCustomerById(@PathVariable long id){
        return ResponseEntity.ok(customerService.findUserByID(id));
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<CustomerUpdateDAO> updateCustomer(@PathVariable long id, @Valid @RequestBody CustomerUpdateDAO customerDetails) {
        return ResponseEntity.ok(customerService.updateCustomer(id, customerDetails));
    }
}
