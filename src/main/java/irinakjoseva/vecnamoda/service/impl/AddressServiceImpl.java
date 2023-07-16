package irinakjoseva.vecnamoda.service.impl;

import irinakjoseva.vecnamoda.model.Address;
import irinakjoseva.vecnamoda.model.User;
import irinakjoseva.vecnamoda.repository.AddressRepository;
import irinakjoseva.vecnamoda.service.AddressService;
import org.springframework.stereotype.Service;

@Service
public class AddressServiceImpl implements AddressService {

    private final AddressRepository addressRepository;

    public AddressServiceImpl(AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }

    // This is a stand-in for normal address save
    // in which we would have to save address upon purchase or pick from existing address attached to user
    @Override
    public Address saveMockAddress(User user) {
        Address address = new Address("Mock Str. 123", "NewYork", "US", "123456", user);
        return addressRepository.save(address);
    }
}
