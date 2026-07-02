public class WordDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() {
        System.out.println("Created Word document");
        return new WordDocument();
    }
}
