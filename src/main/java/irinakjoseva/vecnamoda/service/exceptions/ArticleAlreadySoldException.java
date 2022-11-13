package irinakjoseva.vecnamoda.service.exceptions;

public class ArticleAlreadySoldException extends Throwable {

    public ArticleAlreadySoldException(Long articleId) {
        super("Status is already SOLD for article with id ".concat(articleId.toString()));
    }

    public ArticleAlreadySoldException() {
        super("Status is already SOLD for article");
    }

}
