package Backend.crud.Service;



import Backend.crud.DAO.HouseDAO;
import Backend.crud.exception.ResourceNotFoundException;
import Backend.crud.model.House;
import Backend.crud.repository.HouseRepository;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class HouseService {

    @Autowired
    HouseRepository houseRepository;
    @Autowired
    ModelMapper modelMapper;

    public HouseDAO CreateHouseService(HouseDAO house) {
        House cust = modelMapper.map(house, House.class);
        HouseDAO houseDAO = modelMapper.map(houseRepository.save(cust), HouseDAO.class);
        return houseDAO;
    }
    public List<HouseDAO> getAllHouses() {
        List<HouseDAO> users = new ArrayList<HouseDAO>();
        List<House> houses = houseRepository.findAll();
        houses.stream().forEach(c -> {
            HouseDAO houseDAO = modelMapper.map(c, HouseDAO.class);
            users.add(houseDAO);
        });
        return users;
    }

    public HouseDAO findHouseByID(long id) {
        House house = houseRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Customer not exist with id:" + id));
        HouseDAO houseDAO = modelMapper.map(house, HouseDAO.class);
        return houseDAO;
    }

    public HouseDAO updateHouse(long id, HouseDAO houseDAO) {
        House house = houseRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Customer not exist with id:" + id));
        houseDAO.setProperty_id(id);
        house = modelMapper.map(houseDAO, House.class);
        House updatedhouse = houseRepository.save(house);
        houseDAO = modelMapper.map(updatedhouse, HouseDAO.class);
        return houseDAO;
    }
}
