package ru.triptovoronezh.project.guide;

import java.util.List;

public interface GuideService {
    Guide add(Guide guide);

    Guide get(Long id);

    List<Guide> getAll();

    List<Guide> getAllByCategoryId(Long id);

    Guide update(Guide guide);

    void delete(Long id);

    void deleteAll();
}
