import { User } from '../user-model/user.model';
import { AccommodationType } from '../accommodation-type/accommodation-type.model';

export class Accommodation {
    constructor(public Id?: number, public Name?: string, public Description?: string, public Address?: string, public AverageGrade?: number,
    public Latitude?: number, public Longitude?: number, public ImageUrl?: string, public Approved?: boolean, public AccommodationTypeId?: number,
    public PlaceId?: number, public OwnerId?: number, public Owner?: User, public AccommodationType?: AccommodationType) {
        
    }
}