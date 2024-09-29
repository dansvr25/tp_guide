package ru.triptovoronezh.project.guide;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class GuideServiceImpl implements GuideService {
    private final GuideRepository repository;

    @Override
    public Guide add(Guide guide) {
        return repository.save(guide);
    }

    @Override
    public Guide get(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("There is no a guide with id " + id));
    }

    @Override
    public List<Guide> getAll() {
        return repository.findAll();
    }

    @Override
    public List<Guide> getAllByCategoryId(Long id) {
        return repository.findAllByCategoryId(id);
    }

    @Override
    public Guide update(Guide guide) {
        return repository.save(guide);
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }

    @Override
    public void deleteAll() {
        repository.deleteAll();
    }
}
