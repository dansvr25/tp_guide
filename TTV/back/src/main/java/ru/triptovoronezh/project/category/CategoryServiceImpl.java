package ru.triptovoronezh.project.category;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class CategoryServiceImpl implements CategoryService {
    private final CategoryRepository repository;

    @Override
    public Category add(Category category) {
        return repository.save(category);
    }

    @Override
    public Category get(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("There is no a category with id " + id));
    }

    @Override
    public List<Category> getAll() {
        return repository.findAll();
    }

    @Override
    public Category update(Category category) {
        return repository.save(category);
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
