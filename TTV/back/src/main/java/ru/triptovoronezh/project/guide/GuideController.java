package ru.triptovoronezh.project.guide;

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
@RequestMapping("/guides")
@RequiredArgsConstructor
@Tag(name = "guides", description = "Controller for Guides")
@CrossOrigin("*")
public class GuideController {
    private final GuideService service;

    @PostMapping(produces = {"application/json"})
    @Operation(
            summary = "Creation Guide",
            description = "Creation Guide",
            tags = {"guides"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Creation Guide",
                    content = {
                            @Content(
                                    mediaType = APPLICATION_JSON_VALUE,
                                    schema = @Schema(implementation = Guide.class)
                            )
                    })
    })
    public Guide add(@RequestBody @Valid Guide guide) {
        return service.add(guide);
    }

    @GetMapping(value = "/{id}", produces = {"application/json"})
    @Operation(
            summary = "Getting Guide by ID",
            description = "Getting Guide by ID",
            tags = {"guides"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Getting Guide by ID",
                    content = {
                            @Content(
                                    mediaType = APPLICATION_JSON_VALUE,
                                    schema = @Schema(implementation = Guide.class)
                            )
                    })
    })
    public Guide get(@PathVariable Long id) {
        return service.get(id);
    }

    @GetMapping(produces = {"application/json"})
    @Operation(
            summary = "Getting all Guides",
            description = "Getting all Guides",
            tags = {"guides"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Getting all Guides",
                    content = {
                            @Content(
                                    mediaType = APPLICATION_JSON_VALUE,
                                    array = @ArraySchema(schema = @Schema(implementation = Guide.class))
                            )
                    })
    })
    public List<Guide> getAll() {
        return service.getAll();
    }

    @GetMapping(value = "/categories/{id}", produces = {"application/json"})
    @Operation(
            summary = "Getting all Guides by Category",
            description = "Getting all Guides by Category",
            tags = {"guides"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Getting all Guides by Category",
                    content = {
                            @Content(
                                    mediaType = APPLICATION_JSON_VALUE,
                                    array = @ArraySchema(schema = @Schema(implementation = Guide.class))
                            )
                    })
    })
    public List<Guide> getAllByCategoryId(@PathVariable Long id) {
        return service.getAllByCategoryId(id);
    }

    @PutMapping(produces = {"application/json"})
    @Operation(
            summary = "Updating Guides",
            description = "Updating Guides",
            tags = {"guides"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Updating Guides",
                    content = {
                            @Content(
                                    mediaType = APPLICATION_JSON_VALUE,
                                    schema = @Schema(implementation = Guide.class)
                            )
                    })
    })
    public Guide update(@RequestBody @Valid Guide guide) {
        return service.update(guide);
    }

    @DeleteMapping(value = "/{id}", produces = {"application/json"})
    @Operation(
            summary = "Deleting Guide By ID",
            description = "Deleting Guide By ID",
            tags = {"guides"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Deleting Guide By ID"
            )
    })
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @DeleteMapping(produces = {"application/json"})
    @Operation(
            summary = "Deleting all Guides",
            description = "Deleting all Guides",
            tags = {"guides"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Deleting all Guides"
            )
    })
    public void delete() {
        service.deleteAll();
    }
}
