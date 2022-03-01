CREATE TABLE `vecnamoda`.`color`
(
    `id`  INT         NOT NULL,
    `name`      VARCHAR(20) NULL,
    `hex_value` VARCHAR(6)  NOT NULL,
    PRIMARY KEY (`id`)
);


ALTER TABLE `vecnamoda`.`article`
    ADD COLUMN `color_id` INT NULL
;

ALTER TABLE `vecnamoda`.`article`
    ADD CONSTRAINT `fk_color_article`
        FOREIGN KEY (`color_id`)
            REFERENCES `vecnamoda`.`color` (`id`)
;