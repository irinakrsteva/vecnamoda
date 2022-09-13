CREATE TABLE `vecnamoda`.`image`
(
    `id`   BIGINT      NOT NULL AUTO_INCREMENT,
    `data` LONGBLOB        NOT NULL,
    `name` TINYTEXT    NULL,
    `type` VARCHAR(45) NULL,
    `size` BIGINT      NULL,
    PRIMARY KEY (`id`)
);

ALTER TABLE `vecnamoda`.`article_image`
    ADD COLUMN `image_id` BIGINT NOT NULL AFTER `article_id`,
    ADD INDEX `fk_article_image_image_idx` (`image_id` ASC) VISIBLE;
;

ALTER TABLE `vecnamoda`.`article_image`
    ADD CONSTRAINT `fk_article_image_image`
        FOREIGN KEY (`image_id`)
            REFERENCES `vecnamoda`.`image` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION;
