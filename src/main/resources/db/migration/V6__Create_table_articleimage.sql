CREATE TABLE `vecnamoda`.`article_image`
(
    `id` BIGINT       NOT NULL,
    `name`            VARCHAR(20)  NULL,
    `path`            VARCHAR(500) NULL,
    `article_id`      BIGINT       NOT NULL,
    PRIMARY KEY (`id`)
);

ALTER TABLE `vecnamoda`.`article_image`
    ADD CONSTRAINT `fk_article_image_article`
        FOREIGN KEY (`article_id`)
            REFERENCES `vecnamoda`.`article` (`id`)
;