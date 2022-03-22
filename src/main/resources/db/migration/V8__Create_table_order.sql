CREATE TABLE `vecnamoda`.`order`
(
    `id`             BIGINT   NOT NULL AUTO_INCREMENT,
    `status`         ENUM ('pending', 'fulfilled',
        'cancelled', 'pending_refund',
        'refunded')           NOT NULL,
    `date_ordered`   DATETIME NOT NULL,
    `date_fulfilled` DATETIME NULL,
    `date_refunded`  DATETIME NULL,
    `user_id`        BIGINT   NOT NULL,
    `address_id`     BIGINT   NOT NULL,
    PRIMARY KEY (`id`)
);

ALTER TABLE `vecnamoda`.`order`
    ADD CONSTRAINT `fk_order_user`
        FOREIGN KEY (`user_id`)
            REFERENCES `vecnamoda`.`user` (`id`)
;

ALTER TABLE `vecnamoda`.`order`
    ADD CONSTRAINT `fk_order_address`
        FOREIGN KEY (`address_id`)
            REFERENCES `vecnamoda`.`address` (`id`)
;

ALTER TABLE `vecnamoda`.`article`
    ADD `order_id` BIGINT NULL,
    ADD CONSTRAINT `fk_article_order`
        FOREIGN KEY (`order_id`)
            REFERENCES `vecnamoda`.`order` (`id`)
;