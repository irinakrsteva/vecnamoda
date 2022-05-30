ALTER TABLE `vecnamoda`.`article`
    DROP FOREIGN KEY `fk_article_consignment`;
ALTER TABLE `vecnamoda`.`article`
    CHANGE COLUMN `consignment_id` `consignment_id` BIGINT NULL ;
ALTER TABLE `vecnamoda`.`article`
    ADD CONSTRAINT `fk_article_consignment`
        FOREIGN KEY (`consignment_id`)
            REFERENCES `vecnamoda`.`consignment` (`id`);
