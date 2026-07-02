public class ExcelDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() {
        System.out.println("Created Excel document");
        return new ExcelDocument();
    }
}
