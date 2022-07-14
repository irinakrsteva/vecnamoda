CREATE TABLE `vecnamoda`.`blob`
(
    `id`   BIGINT NOT NULL,
    `data` BLOB   NOT NULL,
    PRIMARY KEY (`id`)
);

ALTER TABLE `vecnamoda`.`article_image`
    ADD COLUMN `blob_id` BIGINT NOT NULL AFTER `article_id`,
    ADD INDEX `fk_article_image_blob_idx` (`blob_id` ASC) VISIBLE;
;

ALTER TABLE `vecnamoda`.`article_image`
    ADD CONSTRAINT `fk_article_image_blob`
        FOREIGN KEY (`blob_id`)
            REFERENCES `vecnamoda`.`blob` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION;
