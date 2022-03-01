CREATE TABLE `vecnamoda`.`consignment`
(
    `id`            BIGINT NOT NULL,
    `date_received` DATE   NOT NULL,
    `user_id`       BIGINT NOT NULL,
    PRIMARY KEY (`id`)
);

ALTER TABLE `vecnamoda`.`consignment`
    ADD CONSTRAINT `fk_consignment_user`
        FOREIGN KEY (`user_id`)
            REFERENCES `vecnamoda`.`user` (`id`)
;

ALTER TABLE `vecnamoda`.`article`
    ADD `consignment_id` BIGINT NOT NULL,
    ADD CONSTRAINT `fk_article_consignment`
        FOREIGN KEY (`consignment_id`)
            REFERENCES `vecnamoda`.`consignment` (`id`)
;