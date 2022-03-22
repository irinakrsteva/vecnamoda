CREATE TABLE `vecnamoda`.`brand`
(
    `id`   INT         NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(20) NULL,
    PRIMARY KEY (`id`)
);


ALTER TABLE `vecnamoda`.`article`
    ADD COLUMN `brand_id` INT NULL
;

ALTER TABLE `vecnamoda`.`article`
    ADD CONSTRAINT `fk_brand_article`
        FOREIGN KEY (`brand_id`)
            REFERENCES `vecnamoda`.`brand` (`id`)
;