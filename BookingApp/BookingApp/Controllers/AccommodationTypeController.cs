using BookingApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace BookingApp.Controllers
{
    [RoutePrefix("api")]
    public class AccommodationTypeController : ApiController
    {
        private BAContext db = new BAContext();


        [HttpGet]
        [Route("AccommodationTypes")]
        public IQueryable<AccommodationType> GetAccommodationType()
        {
            return db.AccommodationTypes;
        }

        [HttpGet]
        [Route("AccommodationTypes/{id}")]
        [ResponseType(typeof(AccommodationType))]
        public IHttpActionResult GetAccommodationType(int id)
        {
            AccommodationType actype = db.AccommodationTypes.Find(id);
            if (actype == null)
            {
                return NotFound();
            }

            return Ok(actype);
        }

        [HttpPost]
        [Route("AccommodationTypes")]
        [ResponseType(typeof(AccommodationType))]
        public IHttpActionResult PostAccommodationType(AccommodationType actype)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.AccommodationTypes.Add(actype);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { controller = "AccommodationTypes", id = actype.Id }, actype);
        }
        [HttpDelete]
        [Route("AccommodationTypes/{id}")]
        [ResponseType(typeof(AccommodationType))]
        public IHttpActionResult DeleteAccommodationType(int id)
        {
            AccommodationType acctype = db.AccommodationTypes.Find(id);
            if (acctype == null)
            {
                return NotFound();
            }

            db.AccommodationTypes.Remove(acctype);
            db.SaveChanges();

            return Ok(acctype);
        }


    }
}
