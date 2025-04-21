package Backend.crud.controller;


import Backend.crud.DAO.HouseDAO;
import Backend.crud.Service.HouseService;
import Backend.crud.exception.ResourceNotFoundException;
import Backend.crud.model.House;
import Backend.crud.repository.HouseRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/rh/house")

public class HouseController {

    @Autowired
    private HouseService houseService;

    @GetMapping
    public ResponseEntity<List<HouseDAO>> getAllHouses(){
        return ResponseEntity.ok(houseService.getAllHouses());
    }

    //build create customer api
    @PostMapping
    public ResponseEntity<HouseDAO> createHouseService(@Valid @RequestBody HouseDAO house) {
        return ResponseEntity.ok(houseService.CreateHouseService(house));
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<HouseDAO> getHouseById(@PathVariable long id){
        return ResponseEntity.ok(houseService.findHouseByID(id));
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<HouseDAO> updateHouse(@PathVariable long id, @Valid @RequestBody HouseDAO houseDetails) {
        return ResponseEntity.ok(houseService.updateHouse(id, houseDetails));
    }
}
