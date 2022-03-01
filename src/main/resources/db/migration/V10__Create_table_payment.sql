-- Current total in user's account acquired through
-- all user-consigned items sold after last payment collection.sql?
ALTER TABLE `vecnamoda`.`user`
    ADD COLUMN `balance` DECIMAL(16, 2) DEFAULT 0.00
;

CREATE TABLE `vecnamoda`.`payment`
(
    `id`      BIGINT         NOT NULL AUTO_INCREMENT,
    `amount`  DECIMAL(16, 2) NULL,
    `date`    DATE           NOT NULL,
    `user_id` BIGINT         NOT NULL,
    PRIMARY KEY (`id`)
);

ALTER TABLE `vecnamoda`.`payment`
    ADD CONSTRAINT `fk_payment_user`
        FOREIGN KEY (`user_id`)
            REFERENCES `vecnamoda`.`user` (`id`)
;

-- Adding info for each article to collect into invoice
-- of total articles payed out for, in one batch,
-- to user who delivered them (if payment is fulfilled)
ALTER TABLE `vecnamoda`.`article`
    ADD COLUMN `payment_id` BIGINT NULL,
    ADD CONSTRAINT `fk_article_payment`
        FOREIGN KEY (`payment_id`)
            REFERENCES `vecnamoda`.`payment` (`id`)
;

-- If user wants to see all items which have been sold,
-- for which payment has not yet been collected,
-- we can filter as article.status = sold; article.payment_id = null.
-- We use this list and assign payment when payment is collected