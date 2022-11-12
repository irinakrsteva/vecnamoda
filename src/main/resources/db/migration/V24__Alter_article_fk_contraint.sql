ALTER TABLE `vecnamoda`.`article`
    DROP FOREIGN KEY `fk_article_purchase`;
ALTER TABLE `vecnamoda`.`article`
    ADD CONSTRAINT `fk_article_purchase`
        FOREIGN KEY (`purchase_id`)
            REFERENCES `vecnamoda`.`purchase` (`id`)
            ON UPDATE CASCADE;
