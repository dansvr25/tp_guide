package ru.triptovoronezh.project.category;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping("/categories")
@RequiredArgsConstructor
@Tag(name = "categories", description = "Controller for Categories")
@CrossOrigin(origins = "http://localhost:5173")
public class CategoryController {
    private final CategoryService service;

    @PostMapping(produces = {"application/json"})
    @Operation(
            summary = "Creation Category",
            description = "Creation Category",
            tags = {"categories"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Creation Category",
                    content = {
                            @Content(
                                    mediaType = APPLICATION_JSON_VALUE,
                                    schema = @Schema(implementation = Category.class)
                            )
                    })
    })
    public Category add(@RequestBody @Valid Category category) {
        return service.add(category);
    }

    @GetMapping(value = "/{id}", produces = {"application/json"})
    @Operation(
            summary = "Getting Category by ID",
            description = "Getting Category by ID",
            tags = {"categories"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Getting Category by ID",
                    content = {
                            @Content(
                                    mediaType = APPLICATION_JSON_VALUE,
                                    schema = @Schema(implementation = Category.class)
                            )
                    })
    })
    public Category get(@PathVariable Long id) {
        return service.get(id);
    }

    @GetMapping(produces = {"application/json"})
    @Operation(
            summary = "Getting all Categories",
            description = "Getting all Categories",
            tags = {"categories"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Getting all Categories",
                    content = {
                            @Content(
                                    mediaType = APPLICATION_JSON_VALUE,
                                    array = @ArraySchema(schema = @Schema(implementation = Category.class))
                            )
                    })
    })
    public List<Category> getAll() {
        return service.getAll();
    }

    @PutMapping(produces = {"application/json"})
    @Operation(
            summary = "Updating Category",
            description = "Updating Category",
            tags = {"categories"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Updating Category",
                    content = {
                            @Content(
                                    mediaType = APPLICATION_JSON_VALUE,
                                    schema = @Schema(implementation = Category.class)
                            )
                    })
    })
    public Category update(@RequestBody @Valid Category category) {
        return service.update(category);
    }

    @DeleteMapping(value = "/{id}", produces = {"application/json"})
    @Operation(
            summary = "Deleting Category By ID",
            description = "Deleting Category By ID",
            tags = {"categories"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Deleting Category By ID"
            )
    })
    public void deleteById(@PathVariable Long id) {
        service.delete(id);
    }

    @DeleteMapping(produces = {"application/json"})
    @Operation(
            summary = "Deleting all Categories",
            description = "Deleting Categories",
            tags = {"categories"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Deleting Categories"
            )
    })
    public void deleteAll() {
        service.deleteAll();
    }
}
