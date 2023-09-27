public class PubModel {
    public int timeDownload { get; set; };
    public int serieUpdate { get; set; };
    public int accountUpdate { get; set; };
    public Pubs pubs { get; set; };
}

public class Pubs{
    public BaseModelImage[] baseModelImage { get; set; };
    public ModelPub[] modelPubs { get; set; };
}

public class BaseModelImage {
   public PublicationInfo publicationInfo { get; set; };
   public EntrepriseInfo entrepriseInfo { get; set; };
}

public class PublicationInfo {
    public string[] imgs_path_local { get; set; };
    public string[] imgs_path_remote { get; set; };
    public string title { get; set; };
    public string description { get; set; };
    public string linkVoirPlus { get; set; };
}

public class EntrepriseInfo {
    public string entpTitle { get; set; };
    public string entpSubTitle{ get; set; };
    public string entpDescription { get; set; };
    public string entpImage { get; set; };
    public Dictionary<string, string> entpReseauxSociaux { get; set; };
    public Dictionary<string, string> entpPhoneNumber { get; set; };
    public Dictionary<string, string> entpMap { get; set; };
    public string entpAddress { get; set; }; 
}

public class ModelPub {
   public string typeModel { get; set; };
   public string emplacement { get; set; };
   public ElementPub [] elementPub { get; set; };
}

public class ElementPub {
   public PublicationInfo publicationInfo { get; set; };
   public EntrepriseInfo entrepriseInfo { get; set; };
}