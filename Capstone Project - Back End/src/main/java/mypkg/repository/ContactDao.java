package mypkg.repository;

import mypkg.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactDao extends JpaRepository<Contact,Integer> {
}
