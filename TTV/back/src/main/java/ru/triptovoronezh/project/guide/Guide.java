package ru.triptovoronezh.project.guide;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;
import ru.triptovoronezh.project.category.Category;

@Entity
@Table(name = "guides")
@Data
@Schema(name = "Guide", description = "Model for Guides")
public class Guide {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", unique = true)
    @NotEmpty
    @Size(max = 50, min = 1)
    private String name;

    @Column(name = "text")
    private String text;

    @Column(name = "photo_link")
    private String photoLink;

    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    private Category category;

    @Column(name = "is_liked")
    private Boolean isLiked;
}
