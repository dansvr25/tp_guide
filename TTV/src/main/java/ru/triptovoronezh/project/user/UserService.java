package ru.triptovoronezh.project.user;

import java.util.List;

public interface UserService {
    User add(User user);

    User get(Long id);

    List<User> getAll();

    User update(User category);

    void delete(Long id);

    void deleteAll();
}
