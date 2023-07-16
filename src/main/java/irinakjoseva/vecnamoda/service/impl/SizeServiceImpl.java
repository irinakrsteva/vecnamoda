package irinakjoseva.vecnamoda.service.impl;

import irinakjoseva.vecnamoda.dto.mapper.SizeMapper;
import irinakjoseva.vecnamoda.dto.response.SizeResponseDto;
import irinakjoseva.vecnamoda.model.Size;
import irinakjoseva.vecnamoda.repository.SizeRepository;
import irinakjoseva.vecnamoda.service.SizeService;
import irinakjoseva.vecnamoda.service.exceptions.NotFound404Exception;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SizeServiceImpl implements SizeService {

    private final SizeRepository sizeRepository;
    private final SizeMapper sizeMapper;

    public SizeServiceImpl(SizeRepository sizeRepository, SizeMapper sizeMapper) {
        this.sizeRepository = sizeRepository;
        this.sizeMapper = sizeMapper;
    }

    @Override
    public List<SizeResponseDto> getAll() {
        List<Size> sizes = sizeRepository.findAll();
        return sizeMapper.toResponseDtos(sizes);
    }

    @Override
    public SizeResponseDto getById(Integer id) {
        Size size = sizeRepository
                .findById(id)
                .orElseThrow(() -> new NotFound404Exception("id: " + id));
        return sizeMapper.toResponseDto(size);
    }

    @Override
    public Size map(Integer id) {
        return sizeRepository.findById(id)
                .orElse(null);
    }
}
