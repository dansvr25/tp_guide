package ru.triptovoronezh.project.guide;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GuideRepository extends JpaRepository<Guide, Long> {
    List<Guide> findAllByCategoryId(Long id);
}