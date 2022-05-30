ALTER TABLE `vecnamoda`.`order`
    RENAME TO  `vecnamoda`.`purchase` ;

ALTER TABLE `vecnamoda`.`article`
    DROP FOREIGN KEY `fk_article_order`;
ALTER TABLE `vecnamoda`.`article`
    CHANGE COLUMN `order_id` `purchase_id` BIGINT NULL DEFAULT NULL ;
ALTER TABLE `vecnamoda`.`article`
    ADD CONSTRAINT `fk_article_purchase`
        FOREIGN KEY (`purchase_id`)
            REFERENCES `vecnamoda`.`purchase` (`id`);

ALTER TABLE `vecnamoda`.`article`
    CHANGE COLUMN `condition` `article_condition` VARCHAR(50) NOT NULL ;
