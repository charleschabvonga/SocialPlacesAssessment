<?php

namespace App\Entity;

use App\Repository\MessageRepository;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\BooleanFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\RangeFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Serializer\Filter\PropertyFilter;
use App\Validator\IsValidOwner;
use Carbon\Carbon;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\SerializedName;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ApiResource(
 *     attributes={
 *          "pagination_items_per_page"=10,
 *          "formats"={"jsonld", "json", "html", "jsonhal", "csv"={"text/csv"}}
 *     }
 * )
 * @ApiFilter(SearchFilter::class, properties={
 *     "name": "partial",
 *     "gender": "exact",
 * })
 * @ApiFilter(PropertyFilter::class)
 * @ORM\Entity(repositoryClass=MessageRepository::class)
 */
#[ApiResource]
class Message
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"message:read", "message:write", "user:read", "user:write"})
     * @Assert\NotBlank()
     * @Assert\Length(
     *     min=2,
     *     max=100,
     *     maxMessage="Enter your meesage in 100 chars or less"
     * )
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"message:read", "message:write"})
     * @Assert\NotBlank()
     * @Assert\Email()
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"message:read", "message:write"})
     * @Assert\NotBlank()
     */
    private $gender;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"message:read", "message:write"})
     * @Assert\NotBlank()
     */
    private $content;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getGender(): ?string
    {
        return $this->gender;
    }

    public function setGender(string $gender): self
    {
        $this->gender = $gender;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }
}
