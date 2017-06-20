using BookingApp.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace BookingApp.Controllers
{
    [RoutePrefix("api")]
    public class AccommodationController : ApiController
    {
        private BAContext db = new BAContext();


        [HttpGet]
        [Route("Accommodations/")]
        public IQueryable<Accommodation> GetAccommodation()
        {
            return db.Accommodations;
        }

        [HttpGet]
        [Route("Accommodations/{id}")]
        [ResponseType(typeof(Accommodation))]
        public IHttpActionResult GetAccommodation(int id)
        {
            Accommodation accommodation = db.Accommodations.Find(id);

            if (accommodation == null)
            {
                return NotFound();
            }

            return Ok(accommodation);
        }

        [HttpPost]
        [Route("Accommodations")]
        [ResponseType(typeof(Accommodation))]
        public IHttpActionResult PostAccommodation(Accommodation accommodation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            accommodation.Rooms = new List<Room>();
            accommodation.Approved = true;
            if(accommodation.AccommodatonTypeId==0)
            {
                accommodation.AccommodatonTypeId = 4;
            }

            db.Accommodations.Add(accommodation);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { controller = "Accommodations", id = accommodation.Id, }, accommodation);
        }
        [HttpPut]
        [Route("Accommodations/{id}")]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutAccommodationType(int id, Accommodation accommodation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != accommodation.Id)
            {
                return BadRequest();
            }

            db.Entry(accommodation).State = EntityState.Modified;


            db.SaveChanges();

            return Ok();

        }


        [HttpDelete]
        [Route("Accommodations/{id}")]
        [ResponseType(typeof(Accommodation))]
        public IHttpActionResult DeleteAccommodation(int id)
        {
            Accommodation accommodation = db.Accommodations.Find(id);
            if (accommodation == null)
            {
                return NotFound();
            }

            db.Accommodations.Remove(accommodation);
            db.SaveChanges();

            return Ok(accommodation);
        }

    }
}
