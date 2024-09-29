package ru.triptovoronezh.project.category;

import java.util.List;

public interface CategoryService {
    Category add(Category category);

    Category get(Long id);

    List<Category> getAll();

    Category update(Category category);

    void delete(Long id);

    void deleteAll();
}
