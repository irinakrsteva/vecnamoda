ALTER TABLE `vecnamoda`.`purchase`
    DROP FOREIGN KEY `fk_order_address`;
ALTER TABLE `vecnamoda`.`purchase`
    DROP INDEX `fk_order_address` ;
;

ALTER TABLE `vecnamoda`.`address`
    CHANGE COLUMN `id` `id` BIGINT NOT NULL AUTO_INCREMENT ;

ALTER TABLE `vecnamoda`.`purchase`
    ADD INDEX `fk_order_address_idx` (`address_id` ASC) VISIBLE;
;
ALTER TABLE `vecnamoda`.`purchase`
    ADD CONSTRAINT `fk_order_address`
        FOREIGN KEY (`address_id`)
            REFERENCES `vecnamoda`.`address` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION;
