package ru.triptovoronezh.project.user;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {
    private final UserRepository repository;

    @Override
    public User add(User user) {
        return repository.save(user);
    }

    @Override
    public User get(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("There is no a user with id " + id));
    }

    @Override
    public List<User> getAll() {
        return repository.findAll();
    }

    @Override
    public User update(User category) {
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
