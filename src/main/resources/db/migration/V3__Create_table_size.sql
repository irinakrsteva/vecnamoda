CREATE TABLE `vecnamoda`.`size`
(
    `id`       INT         NOT NULL AUTO_INCREMENT,
    `standard` VARCHAR(20) NULL,
    `value`    VARCHAR(20) NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `vecnamoda`.`size_group`
(
    `id`   INT         NOT NULL,
    `name` VARCHAR(20) NULL,
    PRIMARY KEY (`id`)
);

ALTER TABLE `vecnamoda`.`category`
    ADD COLUMN `size_group_id` INT NULL
;

ALTER TABLE `vecnamoda`.`category`
    ADD CONSTRAINT `fk_category_size_group`
        FOREIGN KEY (`size_group_id`) REFERENCES `vecnamoda`.`size_group` (`id`)
;

ALTER TABLE `vecnamoda`.`article`
    ADD COLUMN `size_id` INT NULL
;

ALTER TABLE `vecnamoda`.`article`
    ADD CONSTRAINT `fk_category_size_id`
        FOREIGN KEY (`size_id`) REFERENCES `vecnamoda`.`size` (`id`)
;