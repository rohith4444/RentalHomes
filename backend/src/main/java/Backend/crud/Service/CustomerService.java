package Backend.crud.Service;

import Backend.crud.DAO.CustomerDAO;
import Backend.crud.DAO.CustomerUpdateDAO;
import Backend.crud.exception.ResourceNotFoundException;
import Backend.crud.model.Customer;
import Backend.crud.repository.CustomerRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerService {

    @Autowired
    CustomerRepository customerRepository;
    @Autowired
    ModelMapper modelMapper;

    public CustomerUpdateDAO CreateCustomerService(CustomerDAO customer) {
        Customer cust = modelMapper.map(customer, Customer.class);
        CustomerUpdateDAO customerUpdateDAO = modelMapper.map(customerRepository.save(cust), CustomerUpdateDAO.class);
        return customerUpdateDAO;
    }
    public List<CustomerUpdateDAO> getAllUsers() {
        List<CustomerUpdateDAO> users = new ArrayList<CustomerUpdateDAO>();
        List<Customer> customers = customerRepository.findAll();
        customers.stream().forEach(c -> {
            CustomerUpdateDAO customerDAO = modelMapper.map(c, CustomerUpdateDAO.class);
            users.add(customerDAO);
        });
        return users;
    }

    public CustomerUpdateDAO findUserByID(long id) {
        Customer customer = customerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Customer not exist with id:" + id));
        CustomerUpdateDAO customerDAO = modelMapper.map(customer, CustomerUpdateDAO.class);
        return customerDAO;
    }

    public CustomerUpdateDAO updateCustomer(long id, CustomerUpdateDAO customerUpdateDAO) {
        Customer customer = customerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Customer not exist with id:" + id));
        customerUpdateDAO.setId(id);
        customer = modelMapper.map(customerUpdateDAO, Customer.class);
        Customer updatedcustomer = customerRepository.save(customer);
        customerUpdateDAO = modelMapper.map(updatedcustomer, CustomerUpdateDAO.class);
        return customerUpdateDAO;
    }
}
